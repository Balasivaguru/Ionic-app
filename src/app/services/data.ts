export class Message{
    user:string;
    date:string;
    link:string;
}
export class Notifications{
    data:Array<Message>;
}
export class Post{
    user?:string
    date?:Date
    link?:string
    like?:string
}
export class Timeline{
    data:Array<Post>;
}
export class ContestDetails{
    contest_name:string;
    contest_theme:string;
    contest_deadline:string;
    contest_startline:string;
    mail:string;
    name:string;
    id?:string;
}
export class User{
    name:string="";
    mail:string="";
    image_url:string="";
    app_name:string="";
    uploads:Array<Upload>=[];
    
}
export class Upload{
    date:string="";
    contest:string="";
    image:string="";
    contest_id:string="";
    ratings:Array<Star>=[];
}
export class Star{
    user:string="";
    date:string="";
    star:string="";
}
export class Photos{
    data:Array<Link>


}
export class Link{
    _id:string
    rates:string
    images:string
   
}