using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using To_do.Models;
using To_do.Roles;

namespace To_do.Service
{
    public class AuthService
    {
        UserManager<Users> _userManager;
        IConfiguration _configuration;
        SqlUsersService _sqlUsersService;
        
        public AuthService(UserManager<Users> userManager, IConfiguration configuration, SqlUsersService sqlUserService)
        {
            _userManager = userManager;
            _configuration = configuration;
            _sqlUsersService = sqlUserService;
        }

        public async Task<IdentityResult> Create(Users User)
        {
            var created = await _userManager.CreateAsync(User, User.PasswordHash);
            if (created.Succeeded)
            {
                var user = _userManager.FindByEmailAsync(User.Email);
                await _userManager.AddToRoleAsync(user.Result, Enum.GetName(default(RoleTypes)));
            }

            return created;
        }

        public async Task<bool> isValidLogin(Users User)
        {
            var user = await _userManager.FindByEmailAsync(User.Email);
            if(_userManager.GetRolesAsync(user).Result == null)
            {
                return false;
            }
            else
            {
                return await _userManager.CheckPasswordAsync(user, User.PasswordHash);
            }
        }

        public string GenerateToken(Users User)
        {
            if (!isValidLogin(User).Result) throw new Exception("Invalid credentials.");
            var user = _userManager.FindByEmailAsync(User.Email).Result;
            var role = _userManager.GetRolesAsync(user).Result[0];
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
            var expireDate = DateTime.UtcNow.AddMinutes(120);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new System.Security.Claims.ClaimsIdentity(new Claim[] { 
                
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.Role, role),
                    new Claim(ClaimTypes.NameIdentifier, user.Id),
                    new Claim(ClaimTypes.Email, user.Email),

                }),
                Expires = expireDate,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);

        }
    }
}
