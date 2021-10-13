<?php
   abstract class ClassConnexion {

    #conexão com o banco de dados
    protected function conectionDB()
    {
         try{
             $Con=new PDO("mysql:host=localhost;dbname=react-backend","root","");
             return $Con;
         }catch (PDOException $Erro){
             return $Erro->getMessage();
         }
    }
}


?>