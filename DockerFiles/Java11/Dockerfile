# Use the Eclipse Temurin JRE 11 as the base image
FROM eclipse-temurin:11-jre

# Set the working directory
WORKDIR /app

# Run chmod to ensure the application has the right permissions
RUN chmod -R 755 /app

# Copy the target directory contents to the working directory
COPY target /app

# Create a non-root user and switch to it
RUN useradd -m appuser
USER appuser

# Set the entrypoint to run the application
ENTRYPOINT ["java", "-jar", "/app/your-application.jar"]