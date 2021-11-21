export class Post {
  public id: string | undefined;
  public title: string | undefined;
  public content: string | undefined;
  constructor(sentTitle: string = '', sentContent: string = '') {
    this.id = ((Math.random() * 100) + 1).toString();
    (sentTitle.length > 0) ? this.title = sentTitle: {};
    (sentContent.length > 0) ? this.content = sentContent: {};
  }
}

export interface PostInfo {
  id?: string
  title?: string,
  content?: string
}
