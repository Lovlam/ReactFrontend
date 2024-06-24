import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';


function Header () {
    return (
        <>
        <div style={style.header}>
            <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
        </div>
            
        </>
    )
}

const style = {
    container: {
        
    }
}

export default Header