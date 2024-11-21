package website.pnwcsclub_backend.configuration;
import java.util.List;
import static java.util.Objects.nonNull;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.web.servlet.resource.ResourceResolverChain;

import jakarta.servlet.http.HttpServletRequest;

/*
 * This file is the main configuration file for the Spring application. It is
 * used to configure the application to allow for CORS (Cross-Origin Resource
 * Sharing) requests, which are requests that are made from a different domain
 * than the one that the server is hosted on. This is necessary for the frontend
 * to be able to make requests to the backend. The addCorsMappings method is used
 * to configure the application to allow for CORS requests. The addResourceHandlers
 * method is used to configure the application to serve static files from the
 * /static directory. This is necessary for the frontend to be able to access the
 * static files that are served by the backend.
 * 
 * Please don't modify this file unless you know what you're doing.
 */

@Configuration
public class SpringConfiguration implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:5173","https://pnwcsclub.com")
                .allowedMethods("GET", "POST")
                .allowedHeaders("Content-Type", "Authorization")
                .allowCredentials(true);
    };          

 
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        this.serveDirectory(registry, "/", "classpath:/static/");
    }
 
    private void serveDirectory(ResourceHandlerRegistry registry, String endpoint, String location) {
         String[] endpointPatterns = endpoint.endsWith("/")
            ? new String[]{endpoint.substring(0, endpoint.length() - 1), endpoint, endpoint + "**"}
            : new String[]{endpoint, endpoint + "/", endpoint + "/**"};
    registry
            // 2
            .addResourceHandler(endpointPatterns)
            .addResourceLocations(location.endsWith("/") ? location : location + "/")
            .resourceChain(false)
            // 3
            .addResolver(new PathResourceResolver() {
                @Override
                public Resource resolveResource(HttpServletRequest request, String requestPath, List<? extends Resource> locations, ResourceResolverChain chain) {
                    Resource resource = super.resolveResource(request, requestPath, locations, chain);
                    if (nonNull(resource)) {
                        return resource;
                    }
                    return super.resolveResource(request, "/index.html", locations, chain);
                }
            });
    }
 
}
