
export class user{
  id: number;
  userName: string;
  password: string;
  role: string;
  contactNumber: number;
}

export class project {
    id: number;
    projectName: string;
    chiefMentor: string;
    mentor1: string;
    mentor2: string;
    mentor3: string;
    buddy: string;
  }

  export class intern{
    internName: string;
    collegeName: string;
    project: string;  
  }

  export class feedback{
    reviewerName: string;
    internName: string;
    problemSolving: number;
    technicalExcellence: number; 
    projectDelivery: number;
    projectProcessCompilance: number;
    teaming: number;
    discipline: number;
    communication: number;
    overallTechnicalCompitency: number;
  }


  