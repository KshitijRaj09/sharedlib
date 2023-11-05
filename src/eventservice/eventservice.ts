export type UserInfoType = {
   username: string;
   name: string;
   avatar: string;
   userid: string;
 }

export enum WindowEvents {
   currentUser = 'currentUser',
}
const WindowEventService = {
   fire: (event: WindowEvents, body?: CustomEventInit): void => {
     const customEvent = new CustomEvent(event, body);
 
     window.dispatchEvent(customEvent);
   },
   subscribe: (event: WindowEvents, listener: EventListener) => {
     window.addEventListener(event, listener);
   },
   unsubscribe: (event: WindowEvents, listener: EventListener) => {
     window.removeEventListener(event, listener);
   },
};
 
export default WindowEventService;
 