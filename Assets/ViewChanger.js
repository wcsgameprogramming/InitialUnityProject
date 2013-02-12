#pragma strict


function Update () {
	if (Input.GetKeyDown(KeyCode.Alpha1)){
		//Multiple CAmera View
	}if (Input.GetKeyDown(KeyCode.Alpha2)){
		GameObject.Find("First Person Camera").camera.enabled = true;
		GameObject.Find("First Person Camera").camera.rect = Rect(0,0,1,1);
	}if (Input.GetKeyDown(KeyCode.Alpha3)){
		GameObject.Find("Security 1").camera.enabled = true;
		GameObject.Find("Security 1").camera.rect = Rect(0,0,1,1);
	}if (Input.GetKeyDown(KeyCode.Alpha4)){
		GameObject.Find("Security 2").camera.enabled = true;
		GameObject.Find("Security 2").camera.rect = Rect(0,0,1,1);
	}if (Input.GetKeyDown(KeyCode.Alpha5)){
		GameObject.Find("Security 3").camera.enabled = true;
		GameObject.Find("Security 3").camera.rect = Rect(0,0,1,1);
	}if (Input.GetKeyDown(KeyCode.Alpha6)){
		GameObject.Find("Security 4").camera.enabled = true;
		GameObject.Find("Security 4").camera.rect = Rect(0,0,1,1);
	}
}

function TurnOff () {
	GameObject.Find("First Person Camera").camera.enabled = false;
	GameObject.Find("Security 1").camera.enabled = false;
	GameObject.Find("Security 2").camera.enabled = false;
	GameObject.Find("Security 3").camera.enabled = false;
	GameObject.Find("Security 4").camera.enabled = false;
}