<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.*, eadassignment2.model.*" %>  
  
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<%
	ArrayList<producttype> testing = (ArrayList<producttype>)request.getAttribute("dropListElement");	
	
	if(!testing.isEmpty()){
		%>
		<select>
		<%
		for(producttype obj: testing){
			//out.println(obj.getType_name()+"<br>");
			%>
			<option>
			<%=obj.getType_name() %>
			</option>
			<%
		}
		
		%>
		</select>
		<%
		
	}else{
		out.println("Empty");
	}
	
	%>
	

</body>
</html>