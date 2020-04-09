
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
    projectDescription: string;
    chiefMentor: string;
    mentor1: string;
    mentor2: string;
  }

  export class intern{
    id:number;
    
    internName: string;
    project: string;  
  }

  export class feedback{
    userName: string;
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


  