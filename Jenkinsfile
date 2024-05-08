pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building the application'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing the application'
            }
        }
        
        stage('Run') {
            steps {
                echo 'Running the application'
            
                sh "cd mi-app-express && ls && pwd && docker-compose version"
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline execution completed'
        }
    }
}
