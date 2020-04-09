using System.ComponentModel.DataAnnotations;

namespace InternsFeedback.Models.Users
{
    public class AunthenticateModel
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
