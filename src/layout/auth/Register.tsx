import React, {ChangeEvent, useState} from "react";

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('Male');
    const [birthDay, setBirthDay] = useState('');
    const userRoles = ['ROLE_USER'];

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }
    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    }
    const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    }
    const handleBirthDayChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthDay(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const url: string = `http://localhost:8080/ACCOUNT-SERVICE/users/register`;
            const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        firstName: firstName.trim(),
                        lastName: lastName.trim(),
                        username: username.trim(),
                        password: password.trim(),
                        confirmPassword: confirmPassword.trim(),
                        email: email.trim(),
                        phone: phone.trim(),
                        gender: gender,
                        address: address.trim(),
                        birthday: birthDay.trim(),
                        role: userRoles
                    })
                }
            );

            if (response.ok) {
                // showSuccessMessage();
                const data = await response.text();
                if (data === "User registered successfully") {
                    alert('Đăng Ký Tài Khoản Thành Công.');
                    setFirstName('');
                    setLastName('');
                    setUsername('');
                    setPassword('');
                    setConfirmPassword('');
                    setEmail('');
                    setPhone('');
                    setAddress('');
                    setGender('Male');
                    setBirthDay('');
                } else if (data === "Invalid birthday") {
                    alert("Bạn nhâp sai định dạng ngày tháng năm sinh.");
                } else if(data === "Passwords do not match") {
                    alert("Bạn nhập chưa đúng xác nhận mật khẩu.")
                }
                // navigate('/login')
            } else {
                console.log(response.json());
                alert("Đã xảy ra lỗi trong quá trình đăng ký tài khoản.");
                // ErrorMessage();
            }
        } catch (error) {
            // alert("Đã xảy ra lỗi trong quá trình đăng ký tài khoản.")
            // ErrorMessage();
        }
    }

    return (
        <div className={'container'}>
            <div className="header-register d-flex justify-content-between align-items-center">
                {/*<Link to={'/'} className={'text-black fs-3'} title={'Quay lại trang chủ'}><ArrowLeft></ArrowLeft></Link>*/}
                <h3 className={'text-center py-3'}>ĐĂNG KÝ TÀI KHOẢN</h3>
                <a href="#"></a>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-register-item">
                            <label htmlFor="firstName" className="form-label">Họ Và Tên Đệm</label>
                            <input placeholder={'Nguyễn Văn'} onChange={handleFirstNameChange} type="text"
                                   className="form-control is-valid"
                                   required
                                   id="firstName" value={firstName}/>
                        </div>
                        <div className="form-register-item">
                            <label htmlFor="lastName" className="form-label">Tên</label>
                            <input placeholder={'A'} onChange={handleLastNameChange} type="text"
                                   className="form-control is-valid"
                                   required
                                   id="lastName" value={lastName}/>
                        </div>
                        <div className="form-register-item">
                            <label htmlFor="username" className="form-label">Tên Tài Khoản</label>
                            <input placeholder={'username1'} onChange={handleUsernameChange} type="text"
                                // className={"form-control" + (!isErrorUsername ? " is-valid" : " is-invalid")}
                                   className={"form-control is-valid"}
                                   id="username" value={username}/>
                            {/*<div className="invalid-feedback">{errorUsername}</div>*/}
                        </div>
                        <div className="form-register-item">
                            <label htmlFor="password" className="form-label">Mật Khẩu</label>
                            <input placeholder={'*******'} onChange={handlePasswordChange} type="password"
                                // className={"form-control" + (!isErrorPassword ? " is-valid" : " is-invalid")}
                                   className={"form-control is-valid"}
                                   id="password" value={password}/>
                            {/*<div className="invalid-feedback">{errorPassword}</div>*/}
                        </div>
                        <div className="form-register-item">
                            <label htmlFor="confirmPassword" className="form-label">Xác Nhận Mật Khẩu</label>
                            <input placeholder={'*******'} onChange={handleConfirmPasswordChange} type="password"
                                // className={"form-control" + (!isErrorConfirmPassword ? " is-valid" : " is-invalid")}
                                   className={"form-control is-valid"}
                                   id="confirmPassword" value={confirmPassword}/>
                            {/*<div className="invalid-feedback">{errorConfirmPassword}</div>*/}
                        </div>

                    </div>
                    <div className="col-md-6">

                        <div className="form-register-item">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input placeholder={'example@gmail.com'} onChange={handleEmailChange} type="email"
                                // className={"form-control" + (!isErrorEmail ? " is-valid" : " is-invalid")} required
                                   className={"form-control is-valid"} required
                                   id="email" value={email}/>
                            {/*<div className="invalid-feedback">{errorEmail}</div>*/}
                        </div>

                        <div className="form-register-item">
                            <label htmlFor="phoneNumber" className="form-label">Số Điện Thoại</label>
                            <input placeholder={'0xxxxxxxxxx'} onChange={handlePhoneChange} type="text"
                                // className={"form-control" + (!isErrorPhone ? " is-valid" : " is-invalid")} required
                                   className={"form-control is-valid"} required
                                   id="phoneNumber" value={phone}/>
                            {/*<div className="invalid-feedback">{errorPhone}</div>*/}
                        </div>
                        <div className="form-register-item">
                            <label htmlFor="address" className="form-label">Địa Chỉ</label>
                            <input placeholder={'example'} onChange={handleAddressChange} type="text"
                                   className="form-control is-valid" required
                                   id="address" value={address}/>
                        </div>
                        <div className="form-register-item">
                            <label htmlFor="email" className="form-label" style={{marginTop: '5px'}}>Giới Tính</label>
                            <br/>
                            <div className="gender-wrapper d-flex">
                                <div className="form-check" style={{marginRight: '50px'}}>
                                    <input onChange={handleGenderChange} className="form-check-input" type="radio"
                                           name="flexRadioDefault" id="male" value={'Male'}
                                           checked={gender === 'Male'}/>
                                    <label className="form-check-label" htmlFor="male">Nam</label>
                                </div>
                                <div className="form-check">
                                    <input onChange={handleGenderChange} className="form-check-input" type="radio"
                                           name="flexRadioDefault" id="female" value={'Female'}
                                           checked={gender === 'Female'}/>
                                    <label className="form-check-label" htmlFor="female">Nữ</label>
                                </div>
                            </div>

                        </div>
                        <div className="form-register-item">
                            <label htmlFor="address" className="form-label">Sinh Nhật(DD/MM/YYYY)</label>
                            <input placeholder={'28/04/199x'} onChange={handleBirthDayChange} type="text"
                                   className="form-control is-valid" required
                                   id="address" value={birthDay}/>
                        </div>

                        <button type={'submit'} className={'btn btn-success my-3'} style={{float: 'right'}}>Xác Nhận
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Register