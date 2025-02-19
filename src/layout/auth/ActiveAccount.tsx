import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function ActiveAccount() {
    const {username} = useParams();
    const [message, setMessage] = useState('');
    useEffect(() => {
        if (username) {
            activeAcc();
        }
    }, []);
    const activeAcc = async () => {
        const url = `http://localhost:8080/ACCOUNT-SERVICE/users/active?username=${username}`;
        try {
            const response = await fetch(url, {method: 'PUT'});
            if (response.ok) {
                const data = await response.text();
                if (data === "Active Account successfully") {
                    setMessage("Tài khoản " + username + "đã kích hoạt thành công, bạn có thể đăng nhập để bắt đầu học tập");
                } else if (data === "User not found") {
                    setMessage("Không tìm thấy tài khoản với username là: " + username);
                } else if (data === "User is already active") {
                    setMessage("Tài khoản " + username  + " đã được xác thực rồi.");
                }
            }
        } catch (e) {
            console.log("Đã xảy ra lỗi trong quá trình xác thực tài khoản.", e)
        }
    }
    return (
        <div className={'text-align-center '}><h1 className={'text-center'}>Kích hoạt tài khoản</h1>
            <div>
                <p className={'text-center fs-5'}>{message}</p>
            </div>
        </div>
    )
}

export default ActiveAccount