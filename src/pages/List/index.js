/*
 * @Author: your name
 * @Date: 2019-12-28 10:16:47
 * @LastEditTime : 2020-01-05 19:41:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\pages\Login\index.js
 */

import { Component } from 'react';
import list from '@api';

class List extends Component {
    async componentDidMount() {
        const { data } = await list.getInitList();
        // eslint-disable-next-line no-console
        console.info(data);
    }

    render() {
        return 'list';
    }
}
export default List;
