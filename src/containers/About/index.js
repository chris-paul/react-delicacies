/*
 * @Author: your name
 * @Date: 2019-12-28 10:16:47
 * @LastEditTime: 2021-05-15 12:13:16
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\pages\Login\index.js
 */

import React from 'react';
import { Avatar, List } from 'antd';
import styles from './index.less';

const data = [
    {
        author: 'chris-paul',
        avatar:
            'https://avatars.githubusercontent.com/u/18257755?s=400&u=20fdd5ea3dd65ebcbc90492130871acbfcab4222&v=4',
        content: (
            <p>
                现就职于上海某公司担任前端开发工程师一职,热爱前端技术,是一名狂热的足球、篮球爱好者,个人邮箱chrispaullhk@gmail.com,欢迎骚扰。
            </p>
        ),
    },
    {
        author: 'MMLucy',
        avatar: 'https://avatars.githubusercontent.com/u/23635143?v=4',
        content: <p>上海某公司前端开发工程师,重庆妹子一枚,酷爱旅游,欢迎大家踊跃star。</p>,
    },
];

const About = () => (
    <List
        className={styles.commentList}
        header="关于我们"
        data-test="about"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
            <List.Item>
                <List.Item.Meta
                    title={item.author}
                    avatar={<Avatar src={item.avatar} />}
                    description={item.content}
                />
            </List.Item>
        )}
    />
);

export default About;
