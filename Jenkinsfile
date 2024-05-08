pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building the application'
                sh 'docker build -t mi-app-express .'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing the application'
                // Agrega comandos para ejecutar pruebas si es necesario
            }
        }
        
        stage('Run') {
            steps {
                echo 'Running the application'
                sh 'docker-compose up'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline execution completed'
        }
    }
}

