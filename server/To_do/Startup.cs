using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using To_do.Data;
using To_do.Models;
using To_do.Service;

namespace To_do
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var APIInfo = new OpenApiInfo
            {
                Title = "Projeto 06 - Tynner",
                Description = "Uma API criada para TO-DO list com nossas tarefas diárias",
                Contact = new OpenApiContact
                {
                    Name = "Bluenitos",
                    Email = "venturarocha08@gmail.com",
                    Url = new Uri("https://github.com/danielafarias/Tynner/tree/master/server")
                },
                License = new OpenApiLicense
                {
                    Name = "Licença Tynner",
                    Url = new Uri("https://github.com/danielafarias/Tynner/tree/master/server")
                },
                Version = "v1"
            };

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", APIInfo);

                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = $"{Path.Combine(AppContext.BaseDirectory, xmlFile)}";

                c.IncludeXmlComments(xmlPath);

                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    Scheme = "Bearer",
                    In = ParameterLocation.Header,
                    Description = "Autenticação por Token"
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                            Scheme = "oauth2",
                            Name = "Bearer",
                            In = ParameterLocation.Header
                        },
                        new List<string>()
                    }
                });

            });

            services.AddDbContext<ToDoContext>(
                options => options.UseSqlServer(Configuration.GetConnectionString("To_doConnectionString"))
            );

            services.AddScoped<SqlUsersService>();
            services.AddScoped<AuthService>();

            services.AddDefaultIdentity<Users>()
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<ToDoContext>();
            
            var key = Encoding.ASCII.GetBytes(Configuration["Jwt:Key"]);
            services.AddAuthentication(option =>
            {
                option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "To_do v1"));
            }

            app.UseHttpsRedirection();

            app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
