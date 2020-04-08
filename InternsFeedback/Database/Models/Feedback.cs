using System;
using System.Collections.Generic;

namespace InternsFeedback.Models
{
    public partial class Feedback
    {
        public int FeedbackId { get; set; }
        public string ProblemSolvingAnalyzingSkill { get; set; }
        public string TechnicalExcellence { get; set; }
        public string ProjectDelivery { get; set; }
        public string ProjectProcessCompliance { get; set; }
        public string Teaming { get; set; }
        public string Communication { get; set; }
        public string Discipline { get; set; }
        public string OverallTechnicalCompitency { get; set; }
        public int InternId { get; set; }
        public int UserId { get; set; }

        public virtual Intern Intern { get; set; }
        public virtual User User { get; set; }
    }
}
