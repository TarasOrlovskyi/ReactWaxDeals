import userStyle from "../../../User.module.css";
import s from "../NewPassword.module.css";

const NewPasswordForm = () => {
  return (
    <form action="/newPassword/newPassword" method="POST" name="form_reg"
          className={userStyle.user + s.newPasswordUser}
          onSubmit="return matchPassword();">
      <div className={userStyle.user__fieldsWrapper}>
        <div className={userStyle.user__fields + s.newPasswordUser__fields}>
          <label className={userStyle.user__label}>
            <input className={userStyle.user__input} type="password" name="password"
                   placeholder="Password"
                   id="password" onBlur="checkRegex(this)" required/>
          </label>
          <script language='javascript'>
            function checkRegex(passwordInput) {
            var stringRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
            if(passwordInput.value.match(strongRegex))
          {
            document.getElementById('user_message').innerHTML=" ";
            return true;
          }
            else
          {
            document.getElementById('user_message').innerHTML="Password must be at least 8 characters long and contain numbers, lowercase and uppercase letters!";
            document.form_reg.password.focus();
            return false;
          }
          }
          </script>
          <label className={userStyle.user__label}>
            <input className={userStyle.user__input} type="password" name="confirmPassword"
                   id="confirmPassword"
                   placeholder="Confirm password" required/>
          </label>
          <script language='javascript'>
            function matchPassword() {
            if(document.form_reg.password.value != document.form_reg.confirmPassword.value) {
            document.getElementById('user_message').innerHTML="Sorry, the passwords don't match!";
            document.form_reg.confirmPassword.focus();
            return false;
          }
            document.form_reg.submit();
          }
          </script>
        </div>
      </div>
      <input type="hidden" name="recoveryToken" th:value="${recoveryToken}"/>
      <label className={userStyle.user__submitLabel}>
        <input className={userStyle.user__submitInput} type="submit" value="OK"/>
      </label>
    </form>
  );
}

export default NewPasswordForm;