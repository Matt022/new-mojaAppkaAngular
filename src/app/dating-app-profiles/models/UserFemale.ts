import { IBasicInfo } from "./IBasicInfo";
import { ILogin } from "./ILogin";
import { User } from "./User";

export class UserFemale extends User implements ILogin, IBasicInfo {
    gender: string;

    constructor() {
        super();
    }
}