import { User } from 'entities/User';

export enum ArticleBlockType{
    CODE='CODE',
    TEXT='TEXT',
    IMAGE='IMAGE',
    VIDEO='VIDEO',
    LINK='LINK',
    ERROR='ERROR',
}
export interface ArticleBlockBase{
    id:string;
    type:ArticleBlockType
}
export interface ArticleTextBlock extends ArticleBlockBase{
    type:ArticleBlockType.TEXT
    title?:string
    paragraphs:string[]
}
export interface ArticleCodeBlock extends ArticleBlockBase{
    type:ArticleBlockType.CODE
    code:string
}
export interface ArticleImageBlock extends ArticleBlockBase{
    type: ArticleBlockType.IMAGE
    src:string;
    title:string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType{
    IT='IT',
    SCIENCE='SCIENCE',
    POLITICS='POLITICS',
    WEATHER='WEATHER',
}

export enum ArticleView{
    LIST='LIST',
    TILE='TILE'
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    user:User;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
