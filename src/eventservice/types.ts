export type UserInfoType = {
   avatar: string;
   createdAt: string;
   description: string;
   email: string;
   followers : string[]
   followings: string[]
   isAdmin :boolean
   name: string;
   username: string;
   _id: string;
}

export enum WindowEvents {
   currentUser = 'currentUser',
}