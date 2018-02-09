package sa45.g2.day3;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.annotation.Resource;
import javax.json.Json;
import javax.json.JsonObject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import javax.ws.rs.core.MediaType;

@WebServlet(urlPatterns = "/details/*")
public class DetailServlet extends HttpServlet {

	@Resource(lookup = "jdbc/derby_sample")
	private DataSource connPool;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		//No error checks
		String pathInfo = req.getPathInfo();
		System.out.println(">>> path info: " + pathInfo);

		Integer custId = Integer.parseInt(pathInfo.substring(1));

		try (Connection conn = connPool.getConnection()) {

			PreparedStatement ps = conn.prepareStatement("select * from CUSTOMER where CUSTOMER_ID = ?");
			ps.setInt(1, custId);
			ResultSet rs = ps.executeQuery();
			if (!rs.next()) {
				resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
				return;
			}

			JsonObject cust = Json.createObjectBuilder()
					.add("customer_id", rs.getInt("CUSTOMER_ID")) 
					.add("name", rs.getString("NAME"))
					.add("address", rs.getString("ADDRESSLINE1"))
					.add("city", rs.getString("CITY"))
					.add("phone", rs.getString("PHONE"))
					.add("email", rs.getString("EMAIL"))
					.build();

			resp.setStatus(HttpServletResponse.SC_OK);
			resp.setContentType(MediaType.APPLICATION_JSON);
			try (PrintWriter pw = resp.getWriter()) {
				pw.println(cust.toString());
			}


		} catch (SQLException ex) {
			log(ex.getMessage());
			resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return;
		}
	}

	
	
}
