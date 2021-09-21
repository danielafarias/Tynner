using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using To_do.Roles;

namespace To_do.Data
{
    public class SeedData
    {
        public static void InitDatabase(IServiceProvider serviceProvider)
        {
            using
                (var context = new ToDoContext(
                    serviceProvider.GetRequiredService<DbContextOptions<ToDoContext>>()
                )
            )
            {
                context.Database.Migrate();

                var RoleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                string[] roleNames = Enum.GetNames(typeof(RoleTypes));

                foreach (var role in roleNames)
                {
                    if (!RoleManager.RoleExistsAsync(role).Result)
                    {
                        RoleManager.CreateAsync(new IdentityRole { Name = role }).Wait();
                    }
                }
            }
        }
    }
}
