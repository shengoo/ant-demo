import React,{Component} from 'react';
import { Pagination } from 'antd';

class PaginationDemo extends Component{
    render(){
        return <Pagination defaultCurrent={6} total={500} />;
    }
}

export default PaginationDemo;