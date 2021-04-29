import="java.sql.*"

if(session.getAttribute("login")!=null){
response.sendRedirect("welcome"): }

try{
Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnected("jdbc:mysql://localhost:3306/lets_eat","root","");

if(request.getParameter("btn_login"!=null)){
String user_email, user_password;
String email, password;

email=request.getParameter("txt_email");
password=request.getParameter("txt_password");

PreparedStatement prestate=null;

prestate=con.prepareStatement("Select *from login where email=? AND password=?")
prestate.setString(1,email);
prestate.setString(2,password);

ResultSet rs=prestate.executeQuery();

if(rs.next()) {
user_email=rs.getString("email");
user_password=rs.getString("password");

if(email.equals(user_email) && password.equals(user_password)){
session.setAttribute("login, user_email");
response.sendRedirect("welcome");
}
}
else{
request.setAttribute("errorMsg", "invalid email or password");
}
con.close();
}
}
catch(Exception e){
system.out.println(e);}