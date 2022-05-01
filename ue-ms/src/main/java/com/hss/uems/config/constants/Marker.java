package com.hss.uems.config.constants;

import org.springframework.stereotype.Component;

@Component
public class Marker {

	private final String appName="TeaPost Monitor Service";

	private final String authorizedName="Tea Post";
	
	private final String backColor = " rgba(14, 98, 81)";

	private final String fallbackColor = "green";

	private final String logo = "https://drive.google.com/uc?id=1MwFZshUulouFEicH56m8eH4c3zbJsugF";

	private final String name = "TeaPost Monitor";

	private final String primeColor = "rgba(72, 29, 9, 0.7)";

	public String getAppName() {
		return appName;
	}

	public String getAuthorizedName() {
		return authorizedName;
	}

	public String getBackColor() {
		return backColor;
	}

	public String getFallbackColor() {
		return fallbackColor;
	}

	public String getLogo() {
		return logo;
	}

	public String getName() {
		return name;
	}

	public String getPrimeColor() {
		return primeColor;
	}

}
