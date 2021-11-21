import {Model} from "../libs/api/Model";
import CfgTarification from "./CfgTarification";

class CfgProject extends Model {
    public id: string;
    public name: string;
    public number: number;
    public createdAt: Date;
    public updatedAt: Date;
    public tarificationModel: CfgTarification;

    constructor(props:any) {
        super(props);
        this.id = props.id;
        this.name = props.name;
        this.number = props.number;
        this.createdAt = props.createdAt;
        this.updatedAt = props.udpatedAt;
        this.tarificationModel = props.tarificationModel;
    }
}

export default CfgProject;
