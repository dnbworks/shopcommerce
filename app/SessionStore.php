<?php


namespace App;

class SessionStore {
    public $hashes = [];
    public $totalUsers = 0;
    public $totalNewUsers = 0;
    public $totalReturningUsers = 0;

    public function __construct($oldSessions){
        if ($oldSessions) {
            $this->hashes = $oldSessions->hashes;
            $this->totalUsers = $oldSessions->totalUsers;
            $this->totalNewUsers = $oldSessions->totalNewUsers;
            $this->totalReturningUsers = $oldSessions->totalReturningUsers;
            return true;
        }
    }

    public function add($newUser){
        $inCart = false;
      
        if($this->hashes){

            foreach($this->hashes as $hash){
     
                if($hash == $newUser){
                    $inCart = true;
                    $this->totalReturningUsers++;
              
                }

            }

      
        }

        if(!$inCart){
            array_push($this->hashes, $newUser);
    
            $this->totalUsers++;
            $this->totalNewUsers++;
    
        }
      
        
    }

    
}