import {Model} from "../libs/api/Model";

class MeModel extends Model {
    public id: string;
    public email: string;
    public firstname: string;
    public lastname: string;

    constructor(props: any) {
        super(props);
        this.id = props.id;
        this.email = props.email;
        this.firstname = props.firstname;
        this.lastname = props.lastname;
    }
}

export default MeModel;
