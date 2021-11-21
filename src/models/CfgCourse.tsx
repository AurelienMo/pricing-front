import {Model} from "../libs/api/Model";
import CfgProject from "./CfgProject";

class CfgCourse extends Model {
    public id: string;
    public image: string;
    public name: string;
    public projects: CfgProject[]

    constructor(props: any) {
        super(props);
        this.id = props.id;
        this.name = props.name;
        this.image = props.image;
        this.projects = props.projects;
    }
}

export default CfgCourse;
