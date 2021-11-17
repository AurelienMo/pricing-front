import {Model} from "../libs/api/Model";

class CfgTarification extends Model {
    public id: string;
    public createdAt: string;
    public updatedAt: string;
    public name: string;
    public code: string;

    constructor(props: any) {
        super(props);
        this.id = props.id;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        this.name = props.name;
        this.code = props.code;
    }
}

export default CfgTarification;
