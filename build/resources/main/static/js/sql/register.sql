import="java.sql.*"

if(session.getAttribute("login")!=null){
response.sendRedirect("welcome"); }

try
Class.forName("com.mysql.jdbc.Driver");
connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/lets_eat", "root", "");
if(request.getParameter("btn_register")!=null){
String firstname, email, password;

firstname=request.getParameter("txt_name");
email=request.getParameter("txt_email");
password=request.getParameter("txt_password");

PreparedStatement ps=null;

ps=con.prepareStatement("insert into login (firstname ,email, and password");
ps.setString(1,firstname);
ps.setString(2,email);
ps.setString(3,password)

ps.executeUpdate();

request.setAttribute("successMsg", "Register Successfully! Please login");

con.close();
}
}
catch(Exception e){
System.out.println(e)
}