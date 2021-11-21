import {Model} from "../libs/api/Model";
import CfgCourse from "./CfgCourse";

class CfgCategoryCourse extends Model {
    public id: string;
    public name: string;
    public courses: CfgCourse[]

    constructor(props: any) {
        super(props);
        this.id = props.id;
        this.name = props.name;
        this.courses = props.courses;
    }
}

export default CfgCategoryCourse;
