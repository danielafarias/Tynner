using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace To_do.Roles
{
    public class AuthRole : AuthorizeAttribute
    {
        public AuthRole(params RoleTypes [] rolesArray)
        {
            var roles = rolesArray.Select(x => Enum.GetName(typeof(RoleTypes), x));
            Roles = string.Join(",", roles);
        }
    }
}
