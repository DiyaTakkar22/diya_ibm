package com.ibm.day4.newfeatures;


public class Java14StringExpression {
	
	public static void main(String[] args) {
		// Traditional approach using concatenation and escape characters
		String str = "<html>\r\n"
				+ "<head>\r\n"
				+ "    <script src='main.js'></script>\r\n"
				+ "</head>\r\n"
				+ "<body>\r\n"
				+ "    <h1>Java 14</h1>\r\n"
				+ "    <p>Java 14 new features</p>\r\n"
				+ "</body>\r\n"
				+ "</html>";
		
		// New approach using Text Blocks
		
	String str2 = """
<html>
<head>
    <script src='main.js'></script>
</head>
<body>
    <h1>Java 14</h1>
    <p>Java 14 new features</p>
</body>
</html>
			""";
	System.out.println(str2);
		
	}

}