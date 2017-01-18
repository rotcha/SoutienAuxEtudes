/**
 * Created by louly on 2017-01-17.
 */
export class AdsItem
{
    constructor(public adName:string,public description:string,public details:string[],public imagePath:string){}
}

export class AdsList
{
    constructor(public ads:AdsItem[]){}
}
