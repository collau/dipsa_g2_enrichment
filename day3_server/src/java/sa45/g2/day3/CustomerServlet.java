package sa45.g2.day3;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.annotation.Resource;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import javax.ws.rs.core.MediaType;

@WebServlet(urlPatterns = "/customer")
public class CustomerServlet extends HttpServlet {

	@Resource(lookup = "jdbc/derby_sample")
	private DataSource connPool;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {

		JsonArrayBuilder custBuilder = Json.createArrayBuilder();

		try (Connection conn = connPool.getConnection()) {

			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery("select * from CUSTOMER");

			while (rs.next()) {
				JsonObject cust = Json.createObjectBuilder()
						.add("customer_id", rs.getInt("CUSTOMER_ID"))
						.add("name", rs.getString("NAME"))
						.build();
				custBuilder.add(cust);
			}
			rs.close();
		} catch (SQLException ex) {
			log(ex.getMessage());
			resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return;
			//throw new IOException(ex);
		}

		try (PrintWriter pw = resp.getWriter()) {
			resp.setStatus(HttpServletResponse.SC_OK);
			resp.setContentType(MediaType.APPLICATION_JSON);
			pw.println(custBuilder.build().toString());
		}
	}

	
	
}
