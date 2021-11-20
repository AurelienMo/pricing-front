import {Model} from "../../libs/api/Model";

class AuthModel extends Model {
    public token!: string;
    public refresh_token!: string;

    constructor(data: any) {
        super(data);
        if (data) {
            Object.assign(this, data);
        }
    }
}

export default AuthModel;
