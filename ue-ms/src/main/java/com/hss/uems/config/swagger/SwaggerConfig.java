package com.hss.uems.config.swagger;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.common.collect.Lists;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.Contact;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/*
 * @author Satyam Pandey
 * 
 * @Configuration for swagger-UI
 */

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	private boolean isDev;
	
	@PostConstruct
	public void init() {
		isDev=true;
	}

	@Bean
	public Docket productApi() {
		return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.basePackage("com.hss.uems"))
				.paths(PathSelectors.any()).build().apiInfo(apiInfo()).enable(isDev)
				.securitySchemes(Lists.newArrayList(apiKey())).securityContexts(Lists.newArrayList(securityContext()));
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("UEMS").version("0.1").description("API Documentation of UEMS")
				.contact(new Contact("UEMS", "https://ue-ms.org/", "services@ue-ms.org"))
				.build();
	}

	@Bean
	SecurityContext securityContext() {
		return SecurityContext.builder().securityReferences(defaultAuth()).forPaths(PathSelectors.any()).build();
	}

	List<SecurityReference> defaultAuth() {
		AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
		AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
		authorizationScopes[0] = authorizationScope;
		return Lists.newArrayList(new SecurityReference("Token", authorizationScopes));
	}

	private ApiKey apiKey() {
		return new ApiKey("Token", "X_ACCESS_TOKEN", "header");
	}

}
