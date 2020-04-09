using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternsFeedback.Models.Users
{
    public class UpdateModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Contact { get; set; }
        public Role Role { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
   
}
