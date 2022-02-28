pipeline{

    agent any
    
    options {
        ansiColor('xterm')
    }

    stages{

        stage('Building'){
            
            steps{
                 echo "Building the application"
            }
           
        }

        stage("API Testing"){

            steps{
                script{
                    git url: "https://github.com/henriquelh1/Wooga.git"
                    bat:"npm install"
                    bat:"npm update"
                    bat:"npm run alltests-headless"
                }
            }
        }

        stage("Deploying"){

            steps{
                echo "Deploying the application"
            }
        }
    }


}
