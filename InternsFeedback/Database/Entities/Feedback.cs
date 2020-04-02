using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace InternsFeedback.Database.Entities
{
    public class Feedback
    {
        [Key]
        public int FeedbackId { get; set; }
        public string ProblemSolvingAnalyzingSkill { get; set; }
        public string TechnicalExcellence { get; set; }
        public string ProjectDelivery { get; set; }
        public string ProjectProcessCompliance { get; set; }
        public string Teaming { get; set; }
        public string Communication { get; set; }
        public string Discipline { get; set; }
        public string OverallTechnicalCompitency { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }
        [ForeignKey("Interns")]
        public int InternId { get; set; }

        public User user { get; set; }
        public Interns interns { get; set; }
    }
}
