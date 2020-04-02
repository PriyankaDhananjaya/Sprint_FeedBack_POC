using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace InternsFeedback.Database.Entities
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
        public string Contact { get; set; }
        [ForeignKey("Role")]
        public int RoleId { get; set; }

        public Role role { get; set; }

        public IList<Feedback> feedbacks { get; set; }

        public IList<Interns> interns { get; set; }

        public IList<Projects> projects { get; set; }
    }
}
