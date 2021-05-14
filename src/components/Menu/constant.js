/* eslint-disable react/display-name */
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
// 菜单数据
const memuData = [
    {
        key: 'work',
        link: '/work',
        name: '工作台',
        menuIcon: () => {
            // eslint-disable-next-line react/react-in-jsx-scope
            return <HomeOutlined />;
        },
    },
    {
        key: 'list',
        link: '/list',
        name: '订单管理',
        // eslint-disable-next-line react/react-in-jsx-scope
        menuIcon: () => <ShoppingCartOutlined />,
    },
];

// eslint-disable-next-line import/prefer-default-export
export { memuData };
