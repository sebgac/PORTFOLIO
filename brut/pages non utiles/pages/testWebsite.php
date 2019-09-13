   echo "<br><table>
   <tr>
       <td>Nom :</td>
       <td>" . $value["name"] . "</td>
   </tr>"; if (isset($value["website"])) { 
       echo "<tr>
       <td>Website :</td>
       <td><a href=". $value["website"] . " target='_blank'>Lien vers site web</a></td>
   </tr>
   }.";} echo"
   
   <tr>
       <td>Message :</td>
       <td>" . $value["msg"] . "</td>
   </tr>
   </table><br><hr>";

// test 2

             if (isset($value["website"])){
                echo "<br><table>
            <tr>
                <td>Nom :</td>
                <td><a href=". $value["website"] . " target='_blank'>" . $value["name"] . "</a></td>
            </tr>
            
            <tr>
                <td>Message :</td>
                <td>" . $value["msg"] . "</td>
            </tr>
            </table><br><hr>";
            } else {
                echo "<br><table>
            <tr>
                <td>Nom :</td>
                <td>" . $value["name"] . "</td>
            </tr>
            <tr>
                <td>Message :</td>
                <td>" . $value["msg"] . "</td>
            </tr>
            </table><br><hr>";
            }

            // original

            echo "<br><table>
            <tr>
                <td>Nom :</td>
                <td>" . $value["name"] . "</td>
            </tr>
            <tr>
                <td>Website :</td>
                <td><a href=". $value["website"] . " target='_blank'>Lien vers site web</a></td>
            </tr>
            <tr>
                <td>Message :</td>
                <td>" . $value["msg"] . "</td>
            </tr>
            </table><br><hr>";
            }

            //Lien
            if ($value["website"] == ""){
                echo "<br><table>
            <tr>
                <td>Nom :</td>
                <td><a href=". $value["website"] . " target='_blank'>" . $value["name"] . "</a></td>
            </tr>
            
            <tr>
                <td>Message :</td>
                <td>" . $value["msg"] . "</td>
            </tr>
            </table><br><hr>";
            } else {
                echo "<br><table>
            <tr>
                <td>Nom :</td>
                <td>" . $value["name"] . "</td>
            </tr>
            <tr>
                <td>Message :</td>
                <td>" . $value["msg"] . "</td>
            </tr>
            </table><br><hr>";
            }


            // nouveau test

            if ($value["website"] == ""){
                echo "<br><table>
            <tr>
                <td>Nom :</td>
                <td>" . $value["name"] . "</td>
            </tr>
            <tr>
                <td>Website :</td>
                <td><a href=". $value["website"] . " target='_blank'>Lien vers site web</a></td>
            </tr>
            <tr>
                <td>Message :</td>
                <td>" . $value["msg"] . "</td>
            </tr>
            </table><br><hr>";
            } else {
                echo 'KO';
            }

            echo "<br><table>
            <tr>
                <td>Nom :</td>
                <td>" . $value["name"] . "</td>
            </tr>
            <tr>
                <td>Website :</td>
                <td><a href=". $value["website"] . " target='_blank'>Lien vers site web</a></td>
            </tr>
            <tr>
                <td>Message :</td>
                <td>" . $value["msg"] . "</td>
            </tr>
            </table><br><hr>";
            }
            
