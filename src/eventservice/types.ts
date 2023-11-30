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

export type NotificationType = {
   content: string;
   createdAt?: string;
   isRead: boolean;
   receiverId: string;
   senderId: string;
   _id?: string;
   type: 'message' | 'post' | 'like'
}

export enum WindowEvents {
   currentUser = 'currentUser',
   messageNotification = 'messageNotification',
   updateNotification = 'updateNotification',
   updatePostNotification = 'updatePostNotification',
   postNotification = 'postNotification',
   likeNotification = 'likeNotification'
}