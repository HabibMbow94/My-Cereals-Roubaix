<?php 

include("connexion.php");

class ClassClients extends ClassConnexion{

    #Exibição dos carros em um json
    public function exibeClients()
    {
        $BFetch=$this->conectionDB()->prepare("select * from clients");
        $BFetch->execute();

        $J=[];
        $I=0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $J[$I]=[
                "NOM_Prenom"=>$Fetch['NOM_Prenom'],
                "Email"=>$Fetch['Email'],
                "Date"=>$Fetch['Date'],
                "Heure"=>$Fetch['Heure'],
                "Nombre_Places"=>$Fetch['Nombre_Places'],
            ];
            $I++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($J);
    }
}

?>