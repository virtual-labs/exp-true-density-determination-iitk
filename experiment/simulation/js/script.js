task1(4);

function task1(i) { 
  setTimeout(function() { 
//question_time(0);      
      // Add tasks to do 
  }, 1000*i); 
}
var start=0;
var reading=0;
$("#power_button").click(e=>{
	if(start==0){
		document.getElementById("led").innerHTML =`
		<svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5C9 6.98528 6.98528 9 4.5 9C2.01472 9 0 6.98528 0 4.5Z" transform="translate(0.5 0.5)" id="Ellipse" fill="url(#gradient_green)" stroke="#000000" stroke-width="1" />
</svg>
		`;
		document.getElementById("time").innerHTML =`
			<p>00.00</p>`;
		start=1;
	}
	else{
		document.getElementById("led").innerHTML =`
		<svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5C9 6.98528 6.98528 9 4.5 9C2.01472 9 0 6.98528 0 4.5Z" transform="translate(0.5 0.5)" id="Ellipse" fill="url(#gradient_red)" stroke="#000000" stroke-width="1" />
</svg>
		`;
		document.getElementById("flask").innerHTML ="";
        document.getElementById("salt").innerHTML ="";
		document.getElementById("time").innerHTML =``;
		start=0;
		reading=0;
	}
})


$("#weight_button").click(e=>{
           if(start==1){
			
			var rbs = document.querySelectorAll('input[name="powder"]');
            let powder_choose=0;
            for (var rb of rbs) {
                if (rb.checked) {
                    powder_choose = rb.value;
                    break;
                }
            }   
			
			reading++;
		    var rbs = document.querySelectorAll('input[name="water_weight"]');
            let ww=0;
            for (var rb of rbs) {
                if (rb.checked) {
                    ww = rb.value;
                    break;
                }
            }
			if(ww>0 && powder_choose>0){
			document.getElementById("flask").innerHTML ="";
			document.getElementById("salt").innerHTML ="";
			document.getElementById("time").innerHTML =`
			<p>00.00</p>`;
			document.getElementById("flask").innerHTML =`
<?xml version="1.0" encoding="utf-8"?>
<svg width="110px" height="265px" viewBox="0 0 110 265" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <desc>blue test tube code</desc>
  <g id="g3607-2" transform="translate(0.75 0.75)">
    <g id="g3603" transform="translate(36.79944 94.55933)">
      <path d="M0.220599 0.471627C-0.439405 3.62162 0.600603 7.03163 0.510607 10.2916C1.11062 19.5116 1.51061 28.8216 2.1206 38.0016C3.64058 39.7316 6.76061 38.3916 8.92058 38.8116C11.3906 39.3016 14.3206 38.6416 13.3206 35.4716C13.2106 23.9616 13.5406 12.3716 13.1606 0.911614C11.5806 -0.838386 8.38057 0.551613 6.17058 0.111611C4.21059 0.291603 2.0606 -0.288383 0.220568 0.471611L0.220599 0.471627L0.220599 0.471627Z" transform="translate(0 0.004722595)" id="path3599" fill="#986601" stroke="none" />
      <path d="M0.386992 0.476351C-0.393006 5.32635 0.286986 10.4464 0.0570058 15.4064C0.166991 22.9264 -0.162995 30.5364 0.217009 38.0064C1.62701 39.7264 4.647 38.3864 6.68701 38.8164C8.487 38.9264 11.557 38.7364 11.037 36.1264C11.597 24.4264 12.507 12.6564 12.997 1.00636C11.707 -0.893629 8.60699 0.566362 6.59701 0.116366C4.56702 0.306368 2.29703 -0.303633 0.387023 0.476366L0.386992 0.476351L0.386992 0.476351Z" transform="translate(21.1136 0)" id="path3601" fill="#986601" stroke="none" />
    </g>
    <g id="g3595" transform="translate(3.047546 0)">
      <path d="M7.4464 0.0130636C5.16482 0.668063 1.91664 -0.613935 0.230747 0.971064C-0.230069 12.7231 0.163314 24.6251 0.0396631 36.4251L0.0396631 147.025C1.17484 149.405 5.07489 147.735 7.37893 148.225C11.1104 148.785 9.68298 144.705 9.93024 142.755C9.81784 96.785 10.2 50.805 9.67173 4.83505C9.31206 3.30506 10.3124 -0.241949 7.44633 0.013056L7.4464 0.0130636L7.4464 0.0130636Z" transform="matrix(-1 0 0 1 55.84979 0)" id="path3593" fill="none" stroke="#000000" stroke-width="1.5" />
    </g>
    <g id="g3472" transform="translate(0 94.96265)">
      <g id="g3379">
        <path d="M74.685 0.0802195C74.069 0.150219 73.449 0.280216 72.841 0.610218C72.256 0.930217 71.65 1.74022 71.622 2.61022L71.591 2.61022L71.591 2.71022L69.622 58.3902C69.377 64.0302 72.054 69.7402 75.872 75.0502C79.691 80.3502 84.707 85.2802 89.435 89.2102L89.466 89.2102L89.466 89.2402C99.2642 96.7802 105.091 107.4 105.091 119.14C105.091 142.25 82.388 161.27 54.06 161.27C25.732 161.27 3.00001 142.25 3.00001 119.14C3.00001 107.71 8.51001 97.3502 18.154 89.6102L18.154 89.5802C23.019 85.5302 28.112 80.5702 31.966 75.2402C35.82 69.9002 38.493 64.1602 38.248 58.5202L36.31 2.86022L36.31 2.77023L36.279 2.77023C36.251 1.89023 35.614 1.09023 35.029 0.770222C34.421 0.430225 33.833 0.310222 33.216 0.240223C31.984 0.0902216 30.625 0.170223 29.529 0.270222L29.81 3.24023C30.81 3.15023 32.024 3.11023 32.841 3.21023C33.114 3.24023 33.215 3.29023 33.341 3.33023L35.248 58.6402L35.248 58.6702C35.447 63.2502 33.167 68.4502 29.529 73.4902C25.891 78.5202 20.972 83.3702 16.248 87.3002C6.01 95.5202 0 106.75 0 119.14C0 144.2 24.384 164.27 54.06 164.27C83.736 164.27 108.091 144.2 108.091 119.14C108.091 106.41 101.737 94.8902 91.31 86.8602C86.729 83.0502 81.913 78.3102 78.31 73.3002C74.707 68.2902 72.423 63.0902 72.622 58.5202L72.622 58.4902L74.56 3.17023C74.687 3.13023 74.763 3.11023 75.029 3.08023C75.846 2.98023 77.091 3.02023 78.091 3.11023L78.341 0.110225C77.245 0.0202296 75.918 -0.0697744 74.685 0.0802271L74.685 0.0802195L74.685 0.0802195Z" transform="translate(0 3.418762)" id="path2597" fill="none" stroke="#000000" stroke-width="1.5" />
        <g id="g2578" transform="translate(36.979 0)">
          <path d="M13.013 38.01L2.194 38.01L0 0L12.96 0M21.5 0L33.782 0L31.588 38.01L21.607 38.01" id="rect2547" fill="#FDD99B" stroke="#000000" stroke-width="1.5" />
        </g>
      </g>
    </g>
  </g>
</svg>
			`;
			document.getElementById("time").innerHTML =`
			<p>15.96</p>`;
			}
			
			
		    if(ww==2){	
				add_water(powder_choose,2);
			}
			else if(ww==3){
				add_powder(powder_choose,2);
			}
			else if(ww==4){
				add_powder(powder_choose,2)
				add_water(powder_choose,4);
			}
			
		   }
		   else{
			   alert("Please, Power On Weight Machine first ");
		   }
		   })			

function add_water(x,i) { 
  setTimeout(function() { 
      if(i==4){
		  document.getElementById("flask").innerHTML =`
		  <?xml version="1.0" encoding="utf-8"?>
<svg width="110px" height="265px" viewBox="0 0 110 265" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <desc>white test tube code</desc>
  <g id="g3607-2" transform="translate(0.75 0.75)">
    <g id="g3603" transform="translate(36.79944 94.55933)">
      <path d="M0.220599 0.471627C-0.439405 3.62162 0.600603 7.03163 0.510607 10.2916C1.11062 19.5116 1.51061 28.8216 2.1206 38.0016C3.64058 39.7316 6.76061 38.3916 8.92058 38.8116C11.3906 39.3016 14.3206 38.6416 13.3206 35.4716C13.2106 23.9616 13.5406 12.3716 13.1606 0.911614C11.5806 -0.838386 8.38057 0.551613 6.17058 0.111611C4.21059 0.291603 2.0606 -0.288383 0.220568 0.471611L0.220599 0.471627L0.220599 0.471627Z" transform="translate(0 0.004722595)" id="path3599" fill="#986601" stroke="none" />
      <path d="M0.386992 0.476351C-0.393006 5.32635 0.286986 10.4464 0.0570058 15.4064C0.166991 22.9264 -0.162995 30.5364 0.217009 38.0064C1.62701 39.7264 4.647 38.3864 6.68701 38.8164C8.487 38.9264 11.557 38.7364 11.037 36.1264C11.597 24.4264 12.507 12.6564 12.997 1.00636C11.707 -0.893629 8.60699 0.566362 6.59701 0.116366C4.56702 0.306368 2.29703 -0.303633 0.387023 0.476366L0.386992 0.476351L0.386992 0.476351Z" transform="translate(21.1136 0)" id="path3601" fill="#986601" stroke="none" />
    </g>
    <g id="g3595" transform="translate(3.047546 0)">
      <path d="M34.2424 0.471925C33.7225 2.87192 34.6024 5.52193 34.4224 8.04193C34.4624 15.0219 35.2824 22.1219 34.4524 29.0419C31.0824 41.3419 20.8624 49.8619 11.8224 58.1919C4.59243 65.0019 -0.557577 74.6819 0.0524232 84.8119C-0.617575 95.7719 5.21242 106.162 13.0824 113.402C22.2324 121.392 34.1525 126.322 46.2724 127.022C55.9125 127.462 65.7724 126.562 74.6225 122.482C87.4624 117.132 98.5124 106.052 101.482 92.1919C102.292 85.0919 102.582 77.4919 99.2625 70.9619C95.4225 61.7019 87.2025 55.6019 80.1525 48.9319C73.7024 42.2719 67.1525 34.1319 66.8825 24.4819C66.8425 16.6319 67.8225 8.71191 67.4125 0.921922C65.8225 -0.838073 62.6125 0.561921 60.3925 0.111924C58.3525 0.251924 54.1825 -0.828078 54.9225 2.59192L54.9225 54.7719L47.0725 54.7719L47.0725 1.31194C46.0525 -1.06807 42.5525 0.621934 40.4825 0.111939C38.4325 0.311936 36.1525 -0.308059 34.2425 0.47194L34.2424 0.471925L34.2424 0.471925Z" transform="translate(0 132.5637)" id="path3591" fill="#fffaf2" stroke="none" />
      <path d="M7.4464 0.0130636C5.16482 0.668063 1.91664 -0.613935 0.230747 0.971064C-0.230069 12.7231 0.163314 24.6251 0.0396631 36.4251L0.0396631 147.025C1.17484 149.405 5.07489 147.735 7.37893 148.225C11.1104 148.785 9.68298 144.705 9.93024 142.755C9.81784 96.785 10.2 50.805 9.67173 4.83505C9.31206 3.30506 10.3124 -0.241949 7.44633 0.013056L7.4464 0.0130636L7.4464 0.0130636Z" transform="matrix(-1 0 0 1 55.84979 0)" id="path3593" fill="none" stroke="#000000" stroke-width="1.5" />
      <path d="M0 0L16 0L16 68L0 68L0 0L0 0Z" transform="translate(42.95245 148)" id="Rectangle" fill="#fffaf2" stroke="none" />
    </g>
    <g id="g3472" transform="translate(0 94.96265)">
      <g id="g3379">
        <path d="M74.685 0.0802195C74.069 0.150219 73.449 0.280216 72.841 0.610218C72.256 0.930217 71.65 1.74022 71.622 2.61022L71.591 2.61022L71.591 2.71022L69.622 58.3902C69.377 64.0302 72.054 69.7402 75.872 75.0502C79.691 80.3502 84.707 85.2802 89.435 89.2102L89.466 89.2102L89.466 89.2402C99.2642 96.7802 105.091 107.4 105.091 119.14C105.091 142.25 82.388 161.27 54.06 161.27C25.732 161.27 3.00001 142.25 3.00001 119.14C3.00001 107.71 8.51001 97.3502 18.154 89.6102L18.154 89.5802C23.019 85.5302 28.112 80.5702 31.966 75.2402C35.82 69.9002 38.493 64.1602 38.248 58.5202L36.31 2.86022L36.31 2.77023L36.279 2.77023C36.251 1.89023 35.614 1.09023 35.029 0.770222C34.421 0.430225 33.833 0.310222 33.216 0.240223C31.984 0.0902216 30.625 0.170223 29.529 0.270222L29.81 3.24023C30.81 3.15023 32.024 3.11023 32.841 3.21023C33.114 3.24023 33.215 3.29023 33.341 3.33023L35.248 58.6402L35.248 58.6702C35.447 63.2502 33.167 68.4502 29.529 73.4902C25.891 78.5202 20.972 83.3702 16.248 87.3002C6.01 95.5202 0 106.75 0 119.14C0 144.2 24.384 164.27 54.06 164.27C83.736 164.27 108.091 144.2 108.091 119.14C108.091 106.41 101.737 94.8902 91.31 86.8602C86.729 83.0502 81.913 78.3102 78.31 73.3002C74.707 68.2902 72.423 63.0902 72.622 58.5202L72.622 58.4902L74.56 3.17023C74.687 3.13023 74.763 3.11023 75.029 3.08023C75.846 2.98023 77.091 3.02023 78.091 3.11023L78.341 0.110225C77.245 0.0202296 75.918 -0.0697744 74.685 0.0802271L74.685 0.0802195L74.685 0.0802195Z" transform="translate(0 3.418762)" id="path2597" fill="none" stroke="#000000" stroke-width="1.5" />
        <g id="g2578" transform="translate(36.979 0)">
          <path d="M13.013 38.01L2.194 38.01L0 0L12.96 0M21.5 0L33.782 0L31.588 38.01L21.607 38.01" id="rect2547" fill="#FDD99B" stroke="#000000" stroke-width="1.5" />
        </g>
      </g>
    </g>
  </g>
</svg>
`;  
if(x==1){
	document.getElementById("time").innerHTML =`
			<p>39.72</p>`;
}
else if(x==2){
	document.getElementById("time").innerHTML =`
			<p>37.51</p>`;
}
	  }
else if(i==2){
		  document.getElementById("flask").innerHTML =`
		  <?xml version="1.0" encoding="utf-8"?>
<svg width="110px" height="265px" viewBox="0 0 110 265" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <desc>blue test tube code</desc>
  <g id="g3607-2" transform="translate(0.75 0.75)">
    <g id="g3603" transform="translate(36.79944 94.55933)">
      <path d="M0.220599 0.471627C-0.439405 3.62162 0.600603 7.03163 0.510607 10.2916C1.11062 19.5116 1.51061 28.8216 2.1206 38.0016C3.64058 39.7316 6.76061 38.3916 8.92058 38.8116C11.3906 39.3016 14.3206 38.6416 13.3206 35.4716C13.2106 23.9616 13.5406 12.3716 13.1606 0.911614C11.5806 -0.838386 8.38057 0.551613 6.17058 0.111611C4.21059 0.291603 2.0606 -0.288383 0.220568 0.471611L0.220599 0.471627L0.220599 0.471627Z" transform="translate(0 0.004722595)" id="path3599" fill="#986601" stroke="none" />
      <path d="M0.386992 0.476351C-0.393006 5.32635 0.286986 10.4464 0.0570058 15.4064C0.166991 22.9264 -0.162995 30.5364 0.217009 38.0064C1.62701 39.7264 4.647 38.3864 6.68701 38.8164C8.487 38.9264 11.557 38.7364 11.037 36.1264C11.597 24.4264 12.507 12.6564 12.997 1.00636C11.707 -0.893629 8.60699 0.566362 6.59701 0.116366C4.56702 0.306368 2.29703 -0.303633 0.387023 0.476366L0.386992 0.476351L0.386992 0.476351Z" transform="translate(21.1136 0)" id="path3601" fill="#986601" stroke="none" />
    </g>
    <g id="g3595" transform="translate(3.047546 0)">
      <path d="M34.2424 0.471925C33.7225 2.87192 34.6024 5.52193 34.4224 8.04193C34.4624 15.0219 35.2824 22.1219 34.4524 29.0419C31.0824 41.3419 20.8624 49.8619 11.8224 58.1919C4.59243 65.0019 -0.557577 74.6819 0.0524232 84.8119C-0.617575 95.7719 5.21242 106.162 13.0824 113.402C22.2324 121.392 34.1525 126.322 46.2724 127.022C55.9125 127.462 65.7724 126.562 74.6225 122.482C87.4624 117.132 98.5124 106.052 101.482 92.1919C102.292 85.0919 102.582 77.4919 99.2625 70.9619C95.4225 61.7019 87.2025 55.6019 80.1525 48.9319C73.7024 42.2719 67.1525 34.1319 66.8825 24.4819C66.8425 16.6319 67.8225 8.71191 67.4125 0.921922C65.8225 -0.838073 62.6125 0.561921 60.3925 0.111924C58.3525 0.251924 54.1825 -0.828078 54.9225 2.59192L54.9225 54.7719L47.0725 54.7719L47.0725 1.31194C46.0525 -1.06807 42.5525 0.621934 40.4825 0.111939C38.4325 0.311936 36.1525 -0.308059 34.2425 0.47194L34.2424 0.471925L34.2424 0.471925Z" transform="translate(0 132.5637)" id="path3591" fill="#AACCEE" stroke="none" />
      <path d="M7.4464 0.0130636C5.16482 0.668063 1.91664 -0.613935 0.230747 0.971064C-0.230069 12.7231 0.163314 24.6251 0.0396631 36.4251L0.0396631 147.025C1.17484 149.405 5.07489 147.735 7.37893 148.225C11.1104 148.785 9.68298 144.705 9.93024 142.755C9.81784 96.785 10.2 50.805 9.67173 4.83505C9.31206 3.30506 10.3124 -0.241949 7.44633 0.013056L7.4464 0.0130636L7.4464 0.0130636Z" transform="matrix(-1 0 0 1 55.84979 0)" id="path3593" fill="none" stroke="#000000" stroke-width="1.5" />
      <path d="M0 0L16 0L16 68L0 68L0 0L0 0Z" transform="translate(42.95245 148)" id="Rectangle" fill="#AACCEE" stroke="none" />
    </g>
    <g id="g3472" transform="translate(0 94.96265)">
      <g id="g3379">
        <path d="M74.685 0.0802195C74.069 0.150219 73.449 0.280216 72.841 0.610218C72.256 0.930217 71.65 1.74022 71.622 2.61022L71.591 2.61022L71.591 2.71022L69.622 58.3902C69.377 64.0302 72.054 69.7402 75.872 75.0502C79.691 80.3502 84.707 85.2802 89.435 89.2102L89.466 89.2102L89.466 89.2402C99.2642 96.7802 105.091 107.4 105.091 119.14C105.091 142.25 82.388 161.27 54.06 161.27C25.732 161.27 3.00001 142.25 3.00001 119.14C3.00001 107.71 8.51001 97.3502 18.154 89.6102L18.154 89.5802C23.019 85.5302 28.112 80.5702 31.966 75.2402C35.82 69.9002 38.493 64.1602 38.248 58.5202L36.31 2.86022L36.31 2.77023L36.279 2.77023C36.251 1.89023 35.614 1.09023 35.029 0.770222C34.421 0.430225 33.833 0.310222 33.216 0.240223C31.984 0.0902216 30.625 0.170223 29.529 0.270222L29.81 3.24023C30.81 3.15023 32.024 3.11023 32.841 3.21023C33.114 3.24023 33.215 3.29023 33.341 3.33023L35.248 58.6402L35.248 58.6702C35.447 63.2502 33.167 68.4502 29.529 73.4902C25.891 78.5202 20.972 83.3702 16.248 87.3002C6.01 95.5202 0 106.75 0 119.14C0 144.2 24.384 164.27 54.06 164.27C83.736 164.27 108.091 144.2 108.091 119.14C108.091 106.41 101.737 94.8902 91.31 86.8602C86.729 83.0502 81.913 78.3102 78.31 73.3002C74.707 68.2902 72.423 63.0902 72.622 58.5202L72.622 58.4902L74.56 3.17023C74.687 3.13023 74.763 3.11023 75.029 3.08023C75.846 2.98023 77.091 3.02023 78.091 3.11023L78.341 0.110225C77.245 0.0202296 75.918 -0.0697744 74.685 0.0802271L74.685 0.0802195L74.685 0.0802195Z" transform="translate(0 3.418762)" id="path2597" fill="none" stroke="#000000" stroke-width="1.5" />
        <g id="g2578" transform="translate(36.979 0)">
          <path d="M13.013 38.01L2.194 38.01L0 0L12.96 0M21.5 0L33.782 0L31.588 38.01L21.607 38.01" id="rect2547" fill="#FDD99B" stroke="#000000" stroke-width="1.5" />
        </g>
      </g>
    </g>
  </g>
</svg>
`;  
if(x==1){
	document.getElementById("time").innerHTML =`
			<p>35.91</p>`;
}
else if(x==2){
	document.getElementById("time").innerHTML =`
			<p>35.96</p>`;
}
	  }
	  
      // Add tasks to do 
  }, 1000*i); 
}

function add_powder(x,i) { 
  setTimeout(function() { 
  
document.getElementById("salt").innerHTML =`
<?xml version="1.0" encoding="utf-8"?>
<svg width="96px" height="65px" viewBox="0 0 96 65" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">  
  <g id="1540863971">
    <g id="Layer_1">
      <path d="M0 20.1618C0 9.02673 2.06325 7.62939e-06 4.6084 0C7.15355 0 9.2168 9.02673 9.2168 20.1618C9.2168 31.2968 7.15355 40.3235 4.6084 40.3235C2.06325 40.3235 0 31.2968 0 20.1618Z" transform="matrix(-0.6293203 0.777146 -0.777146 -0.6293203 37.13757 57.70679)" id="Ellipse" fill="#FFFFFF" stroke="none" />
      <path d="M0 20.1617C-3.8147e-06 9.02672 4.64231 -7.62939e-06 10.3689 0C16.0955 0 20.7378 9.02671 20.7378 20.1617C20.7378 31.2968 16.0955 40.3235 10.3689 40.3235C4.64231 40.3235 0 31.2968 0 20.1617Z" transform="matrix(-4.371139E-08 1 -1 -4.371139E-08 65.97226 43.67627)" id="Ellipse-3" fill="#FFFFFF" stroke="none" />
      <path d="M0 20.1618C0 9.02672 2.06326 0 4.60841 0C7.15355 0 9.2168 9.02672 9.2168 20.1618C9.2168 31.2968 7.15355 40.3235 4.6084 40.3235C2.06325 40.3235 0 31.2968 0 20.1618Z" transform="matrix(-0.6156614 -0.7880108 0.7880108 -0.6156614 63.22696 64.16803)" id="Ellipse-2" fill="#FFFFFF" stroke="none" />
      <path d="M0 28.2265C0 12.6374 2.06325 7.62939e-06 4.6084 0C7.15355 0 9.2168 12.6374 9.2168 28.2265C9.2168 43.8155 7.15354 56.4529 4.6084 56.4529C2.06325 56.4529 0 43.8155 0 28.2265Z" transform="matrix(-0.01745235 0.9998477 -0.9998477 -0.01745235 74.72226 44.49623)" id="Ellipse-4" fill="#FFFFFF" stroke="none" />
      <path d="M50.7405 38.9821C51.8461 38.9821 52.7448 38.0834 52.7448 36.9778C52.7448 35.8729 51.8461 34.9728 50.7405 34.9728C49.6356 34.9728 48.7362 35.873 48.7362 36.9778C48.7362 38.0834 49.6356 38.9821 50.7405 38.9821ZM49.7558 30.2988C50.4284 30.153 50.8571 29.4918 50.7135 28.8171C50.5684 28.1452 49.9058 27.7157 49.2325 27.8601C48.5592 28.0044 48.1297 28.667 48.2748 29.3403C48.4191 30.0144 49.0818 30.4431 49.7558 30.2988M77.0145 38.2185C77.6992 38.286 78.31 37.7862 78.3782 37.1001C78.4472 36.4154 77.9467 35.8061 77.262 35.7364C76.5766 35.6674 75.9658 36.1687 75.8976 36.8548C75.8286 37.538 76.3291 38.1502 77.0145 38.2185M65.165 24.4509C65.8504 24.5205 66.4619 24.0207 66.5294 23.3346C66.5977 22.6499 66.0986 22.0378 65.4132 21.9695C64.7278 21.9012 64.117 22.4018 64.0481 23.0872C63.9798 23.7719 64.4796 24.3833 65.165 24.4509M30.9552 19.2031C31.6434 19.2031 32.2022 18.6449 32.2022 17.9567C32.2022 17.2677 31.6434 16.7096 30.9552 16.7096C30.2662 16.7096 29.7081 17.2677 29.7081 17.9567C29.7081 18.6449 30.2662 19.2031 30.9552 19.2031M62.0829 42.9203C62.7712 42.9203 63.3293 42.3622 63.3293 41.6733C63.3293 40.9843 62.7712 40.4262 62.0829 40.4262C61.394 40.4262 60.8359 40.9843 60.8359 41.6733C60.8359 42.3622 61.394 42.9203 62.0829 42.9203M44.0849 45.4131C44.7731 45.4131 45.3312 44.8549 45.3312 44.1674C45.3312 43.4784 44.7731 42.9203 44.0849 42.9203C43.3966 42.9203 42.8385 43.4784 42.8385 44.1674C42.8385 44.8549 43.3966 45.4131 44.0849 45.4131M24.5413 42.2065C25.2302 42.2065 25.7883 41.6483 25.7883 40.9608C25.7883 40.2719 25.2302 39.7137 24.5413 39.7137C23.853 39.7137 23.2949 40.2719 23.2949 40.9608C23.2949 41.6483 23.853 42.2065 24.5413 42.2065M19.4933 28.7225C20.1822 28.7225 20.7396 28.1644 20.7396 27.4754C20.7396 26.7879 20.1822 26.2298 19.4933 26.2298C18.8043 26.2298 18.2469 26.7879 18.2469 27.4754C18.2469 28.1644 18.8043 28.7225 19.4933 28.7225M39.4429 13.161C39.4429 13.8237 39.9825 14.364 40.6459 14.364C41.3085 14.364 41.8482 13.8236 41.8482 13.161C41.8482 12.4977 41.3085 11.9587 40.6459 11.9587C39.9825 11.9587 39.4429 12.4977 39.4429 13.161M38.6416 13.161C38.6416 12.0562 39.541 11.1575 40.6459 11.1575C41.7501 11.1575 42.6495 12.0562 42.6495 13.161C42.6495 14.2666 41.7501 15.1653 40.6459 15.1653C39.541 15.1653 38.6416 14.2666 38.6416 13.161M52.7448 20.3599C52.7448 21.0239 53.2845 21.5628 53.9478 21.5628C54.6105 21.5628 55.1501 21.0239 55.1501 20.3599C55.1501 19.6965 54.6105 19.1576 53.9478 19.1576C53.2845 19.1576 52.7448 19.6965 52.7448 20.3599M51.9435 20.3599C51.9435 19.255 52.8422 18.3563 53.9478 18.3563C55.0527 18.3563 55.9514 19.255 55.9514 20.3599C55.9514 21.4654 55.0527 22.3656 53.9478 22.3656C52.8422 22.3656 51.9435 21.4655 51.9435 20.3599M26.1893 27.4755C26.1893 28.1396 26.7282 28.6785 27.3915 28.6785C28.0542 28.6785 28.5938 28.1396 28.5938 27.4755C28.5938 26.8121 28.0542 26.2732 27.3915 26.2732C26.7282 26.2732 26.1893 26.8121 26.1893 27.4755M25.3874 27.4754C25.3874 26.3705 26.2868 25.4718 27.3917 25.4718C28.4973 25.4718 29.396 26.3705 29.396 27.4754C29.396 28.581 28.4973 29.4797 27.3917 29.4797C26.2868 29.4797 25.3874 28.581 25.3874 27.4754M32.6024 40.6039C32.6024 41.2665 33.1421 41.8069 33.8047 41.8069C34.4681 41.8069 35.0077 41.2665 35.0077 40.6039C35.0077 39.9391 34.4681 39.4016 33.8047 39.4016C33.1421 39.4016 32.6024 39.9391 32.6024 40.6039M31.8012 40.6039C31.8012 39.4983 32.6999 38.5989 33.8048 38.5989C34.9104 38.5989 35.8091 39.4983 35.8091 40.6039C35.8091 41.708 34.9104 42.6074 33.8048 42.6074C32.6999 42.6074 31.8012 41.708 31.8012 40.6039M62.484 31.3667C62.484 32.0279 63.023 32.5676 63.6863 32.5676C64.349 32.5676 64.8886 32.0279 64.8886 31.3667C64.8886 30.7026 64.349 30.1644 63.6863 30.1644C63.023 30.1644 62.484 30.7026 62.484 31.3667M61.682 31.3667C61.682 30.2597 62.5807 29.3617 63.6863 29.3617C64.7912 29.3617 65.6906 30.2597 65.6906 31.3667C65.6906 32.4723 64.7912 33.3703 63.6863 33.3703C62.5807 33.3703 61.682 32.4723 61.682 31.3667M38.9509 26.7467C38.9509 27.4101 39.4905 27.949 40.1539 27.949C40.8165 27.949 41.3561 27.4101 41.3561 26.7467C41.3561 26.0841 40.8165 25.5437 40.1539 25.5437C39.4905 25.5437 38.9509 26.0841 38.9509 26.7467M38.1496 26.7467C38.1496 25.6411 39.0483 24.7431 40.1539 24.7431C41.2581 24.7431 42.1575 25.6411 42.1575 26.7467C42.1575 27.8523 41.2581 28.7502 40.1539 28.7502C39.0483 28.7502 38.1496 27.8523 38.1496 26.7467M46.6196 48.2833C69.1672 48.2833 93.1283 43.3355 93.2478 34.1595C91.744 30.5363 48.6203 0 42.5421 0C32.6423 0 2.89159 31.3262 0 34.397C0.526844 43.4202 24.2675 48.2833 46.6196 48.2833" transform="translate(0.6499023 0)" id="path5280" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
    </g>
  </g>
</svg>
`;
	  if(x==1){
	document.getElementById("time").innerHTML =`
			<p>20.19</p>`;
}
else if(x==2){
	document.getElementById("time").innerHTML =`
			<p>18.16</p>`;
}
      // Add tasks to do 
  }, 1000*i); 
}

function ok_click(i){
		document.getElementById("result_table").innerHTML ="";
	}

$("#table_button").click(e=>{
	if(start==1){ 
	if(reading>3){
	var rbs = document.querySelectorAll('input[name="powder"]');
            let y=1;
            for (var rb of rbs) {
                if (rb.checked) {
                    y = rb.value;
                    break;
                }
            }
			
	if(y==1){
		var content=`
						<table>
						<tr>
						<th colspan="4" style="width:60rem; height:5rem; text-align: center ; background-color: #0055FF; color:white; font-size:35px;">Observation Table</th></tr>
						<tr>
						<td colspan="4" style="height:5rem; text-align: center ; background-color: #E8E8E8; color:Black; font-size:25px;" >Sample Used: Benzioc Acid</td></tr>
						<tr style="height:5rem; text-align: center ; background-color: #E8E8E8; color:darkblue; font-size:20px; font-weight: bold;">
						<td>W1 (Weight of Empty<br>Pycnometer)</td>
						<td>W2 (Weight of Empty<br>Pycnometer + Water)</td>
						<td>W3 (Weight of Empty<br>Pycnometer + Powder)</td>
						<td>W3(Weight of Empty<br>Pycnometer + Powder+Water)</td>
						</tr>
						<tr style="height:7rem; text-align: center ; background-color: #E8E8E8; color:darkblue; font-size:30px; font-weight: bold;">
						<td>15.96</td>
						<td>35.91</td>
						<td>20.09</td>
						<td>39.72</td>
						</tr>
						<tr style="height:7rem; text-align: center ; background-color: #E8E8E8; color:darkblue; font-size:30px; font-weight: bold;">
						<td colspan="4">
			<button id="ok_btn" onclick="ok_click()">OK</button>
						</td>
						</tr>
						
						</table>
	`;
	}
	else{
		var content=`
						<table>
						<tr>
						<th colspan="4" style="width:60rem; height:5rem; text-align: center ; background-color: #0055FF; color:white; font-size:35px;">Observation Table</th></tr>
						<tr>
						<td colspan="4" style="height:5rem; text-align: center ; background-color: #E8E8E8; color:Black; font-size:25px;" >Sample Used: Salicylic Acid</td></tr>
						<tr style="height:5rem; text-align: center ; background-color: #E8E8E8; color:darkblue; font-size:20px; font-weight: bold;">
						<td>W1 (Weight of Empty<br>Pycnometer)</td>
						<td>W2 (Weight of Empty<br>Pycnometer + Water)</td>
						<td>W3 (Weight of Empty<br>Pycnometer + Powder)</td>
						<td>W3(Weight of Empty<br>Pycnometer + Powder+Water)</td>
						</tr>
						<tr style="height:7rem; text-align: center ; background-color: #E8E8E8; color:darkblue; font-size:30px; font-weight: bold;">
						<td>15.96</td>
						<td>35.96</td>
						<td>18.16</td>
						<td>37.51</td>
						</tr>
						<tr style="height:7rem; text-align: center ; background-color: #E8E8E8; color:darkblue; font-size:30px; font-weight: bold;">
						<td colspan="4">
			<button id="ok_btn" onclick="ok_click()">OK</button>
						</td>
						</tr>
						
						</table>
	`;
	}
	document.getElementById("result_table").innerHTML =content;
	}}
    else{
			   alert("Please, Power On Weight Machine first ");
		   }
})

$("#calc_button").click(e=>{
	if(start==1){
	
    var rbs = document.querySelectorAll('input[name="powder"]');
            let x=1;
            for (var rb of rbs) {
                if (rb.checked) {
                    x = rb.value;
                    break;
                }
            }
	
	if(x==1){
	var W1=15.96;
    var W2=35.91;
    var	W3=20.09;
	var	W4=39.72;
	}
	else{
	var W1=15.96;
    var W2=35.96;
    var	W3=18.16;
	var	W4=37.51;	
	}
	
	document.getElementById("calc_table").innerHTML =`
	<div id="calc_centre"><br>
<label style="font-size:40px; font-weight: bold; color:red;">Calculation Area</label><br><br>
<label style="font-size:30px; font-weight: bold; color:blue;">W1 = `+W1+`</label><tab2></tab2><label style="font-size:35px; font-weight: bold;">|</label><tab2></tab2>
<label style="font-size:30px; font-weight: bold; color:blue;">W2 = `+W2+`</label><br><br>
<label style="font-size:30px; font-weight: bold; color:blue;">W3 = `+W3+`</label><tab2></tab2><label style="font-size:35px; font-weight: bold;">|</label><tab2></tab2>
<label style="font-size:30px; font-weight: bold; color:blue;">W4 = `+W4+`</label><br><br><br>
<label style="font-size:25px; font-weight: bold;">Choose Correct Formula for Weight of Powder?</label><br><br>
<label style="color:darkblue; font-size:25px; font-weight: bold;">Weight of Powder = __ - __</label><br><br>
<input type="radio" id="op1" name="ques1" value="1">
<label for="op1" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W1</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_1" name="ques2" value="1">
<label for="op1_1" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W1</b></label><br>
<input type="radio" id="op2" name="ques1" value="2">
<label for="op2" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W2</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_2" name="ques2" value="2">
<label for="op1_2" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W2</b></label><br>
<input type="radio" id="op3" name="ques1" value="3">
<label for="op3" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W3</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_3" name="ques2" value="3">
<label for="op1_3" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W3</b></label><br>
<input type="radio" id="op4" name="ques1" value="4">
<label for="op4" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W4</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_4" name="ques2" value="4">
<label for="op1_4" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W4</b></label><br>
<button id="ok_btn" onclick="question2()"><b>Next</b></button>
</div>
	`;
	}
})			

function question2(){
	
	var rbs = document.querySelectorAll('input[name="ques1"]');
            let x1;
            for (var rb of rbs) {
                if (rb.checked) {
                    x1 = rb.value;
                    break;
                }
            }
			
	var rbs = document.querySelectorAll('input[name="ques2"]');
            let x2;
            for (var rb of rbs) {
                if (rb.checked) {
                    x2 = rb.value;
                    break;
                }
            }
			
	if(x1==3 && x2==1){
	
	var rbs = document.querySelectorAll('input[name="powder"]');
            let x=1;
            for (var rb of rbs) {
                if (rb.checked) {
                    x = rb.value;
                    break;
                }
            }
	
	if(x==1){
	var W1=15.96;
    var W2=35.91;
    var	W3=20.09;
	var	W4=39.72;
	}
	else{
	var W1=15.96;
    var W2=35.96;
    var	W3=18.16;
	var	W4=37.51;	
	}
	
	document.getElementById("calc_table").innerHTML =`
	<div id="calc_centre"><br>
<label style="font-size:40px; font-weight: bold; color:red;">Calculation Area</label><br><br>
<label style="font-size:30px; font-weight: bold; color:blue;">W1 = `+W1+`</label><tab2></tab2><label style="font-size:35px; font-weight: bold;">|</label><tab2></tab2>
<label style="font-size:30px; font-weight: bold; color:blue;">W2 = `+W2+`</label><br><br>
<label style="font-size:30px; font-weight: bold; color:blue;">W3 = `+W3+`</label><tab2></tab2><label style="font-size:35px; font-weight: bold;">|</label><tab2></tab2>
<label style="font-size:30px; font-weight: bold; color:blue;">W4 = `+W4+`</label><br><br><br>
<label style="font-size:25px; font-weight: bold;">Choose Correct Formula for Weight of Water?</label><br><br>
<label style="color:darkblue; font-size:25px; font-weight: bold;">Weight of Water = __ - __</label><br><br>
<input type="radio" id="op1" name="ques1" value="1">
<label for="op1" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W1</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_1" name="ques2" value="1">
<label for="op1_1" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W1</b></label><br>
<input type="radio" id="op2" name="ques1" value="2">
<label for="op2" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W2</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_2" name="ques2" value="2">
<label for="op1_2" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W2</b></label><br>
<input type="radio" id="op3" name="ques1" value="3">
<label for="op3" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W3</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_3" name="ques2" value="3">
<label for="op1_3" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W3</b></label><br>
<input type="radio" id="op4" name="ques1" value="4">
<label for="op4" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W4</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_4" name="ques2" value="4">
<label for="op1_4" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W4</b></label><br>
<button id="ok_btn" onclick="question3()"><b>Next</b></button>
</div>
	`;
	}
	else{
		alert("Wrong Attemp!!!");
	}
}

function question3(){
	
	var rbs = document.querySelectorAll('input[name="ques1"]');
            let x1;
            for (var rb of rbs) {
                if (rb.checked) {
                    x1 = rb.value;
                    break;
                }
            }
			
	var rbs = document.querySelectorAll('input[name="ques2"]');
            let x2;
            for (var rb of rbs) {
                if (rb.checked) {
                    x2 = rb.value;
                    break;
                }
            }
			
	if(x1==2 && x2==1){
	
	var rbs = document.querySelectorAll('input[name="powder"]');
            let x=1;
            for (var rb of rbs) {
                if (rb.checked) {
                    x = rb.value;
                    break;
                }
            }
	
	if(x==1){
	var W1=15.96;
    var W2=35.91;
    var	W3=20.09;
	var	W4=39.72;
	}
	else{
	var W1=15.96;
    var W2=35.96;
    var	W3=18.16;
	var	W4=37.51;	
	}
	
	document.getElementById("calc_table").innerHTML =`
	<div id="calc_centre"><br>
<label style="font-size:40px; font-weight: bold; color:red;">Calculation Area</label><br><br>
<label style="font-size:30px; font-weight: bold; color:blue;">W1 = `+W1+`</label><tab2></tab2><label style="font-size:35px; font-weight: bold;">|</label><tab2></tab2>
<label style="font-size:30px; font-weight: bold; color:blue;">W2 = `+W2+`</label><br><br>
<label style="font-size:30px; font-weight: bold; color:blue;">W3 = `+W3+`</label><tab2></tab2><label style="font-size:35px; font-weight: bold;">|</label><tab2></tab2>
<label style="font-size:30px; font-weight: bold; color:blue;">W4 = `+W4+`</label><br><br><br>
<label style="font-size:25px; font-weight: bold;">Choose Correct Formula for Weight of Water in presence of Powder?</label><br><br>
<label style="color:darkblue; font-size:25px; font-weight: bold;">Weight of Water in presence of Powder = __ - __</label><br><br>
<input type="radio" id="op1" name="ques1" value="1">
<label for="op1" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W1</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_1" name="ques2" value="1">
<label for="op1_1" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W1</b></label><br>
<input type="radio" id="op2" name="ques1" value="2">
<label for="op2" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W2</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_2" name="ques2" value="2">
<label for="op1_2" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W2</b></label><br>
<input type="radio" id="op3" name="ques1" value="3">
<label for="op3" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W3</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_3" name="ques2" value="3">
<label for="op1_3" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W3</b></label><br>
<input type="radio" id="op4" name="ques1" value="4">
<label for="op4" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W4</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_4" name="ques2" value="4">
<label for="op1_4" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W4</b></label><br>
<button id="ok_btn" onclick="question4()"><b>Next</b></button>
</div>
	`;
	}
	else{
		alert("Wrong Attemp!!!");
	}
}

function question4(){
	
	var rbs = document.querySelectorAll('input[name="ques1"]');
            let x1;
            for (var rb of rbs) {
                if (rb.checked) {
                    x1 = rb.value;
                    break;
                }
            }
			
	var rbs = document.querySelectorAll('input[name="ques2"]');
            let x2;
            for (var rb of rbs) {
                if (rb.checked) {
                    x2 = rb.value;
                    break;
                }
            }
			
	if(x1==4 && x2==3){
	
	var rbs = document.querySelectorAll('input[name="powder"]');
            let x=1;
            for (var rb of rbs) {
                if (rb.checked) {
                    x = rb.value;
                    break;
                }
            }
	
	if(x==1){
	var W1=15.96;
    var W2=35.91;
    var	W3=19.95;
	var	W4=19.63;
	}
	else{
	var W1=15.96;
    var W2=35.96;
    var	W3=20.00;
	var	W4=19.35;	
	}
	
	document.getElementById("calc_table").innerHTML =`
	<div id="calc_centre"><br>
<label style="font-size:40px; font-weight: bold; color:red;">Calculation Area</label><br><br>
<label style="font-size:30px; font-weight: bold; color:blue;">W1 = `+W1+`</label><tab2></tab2><label style="font-size:35px; font-weight: bold;">|</label><tab2></tab2>
<label style="font-size:30px; font-weight: bold; color:blue;">W2 = `+W2+`</label><br><br>
<label style="font-size:30px; font-weight: bold; color:blue;">Ww = `+W3+`</label><tab2></tab2><label style="font-size:35px; font-weight: bold;">|</label><tab2></tab2>
<label style="font-size:30px; font-weight: bold; color:blue;">Wpw = `+W4+`</label><br><br><br>
<label style="font-size:25px; font-weight: bold;">Choose Correct Formula for Weight of Water displace by Powder?</label><br><br>
<label style="color:darkblue; font-size:25px; font-weight: bold;">Weight of Water displace by Powder = __ - __</label><br><br>
<input type="radio" id="op1" name="ques1" value="1">
<label for="op1" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W1</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_1" name="ques2" value="1">
<label for="op1_1" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W1</b></label><br>
<input type="radio" id="op2" name="ques1" value="2">
<label for="op2" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W2</b></label><tab3></tab3><tab3></tab3>
<input type="radio" id="op1_2" name="ques2" value="2">
<label for="op1_2" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>W2</b></label><br>
&nbsp;
<input type="radio" id="op3" name="ques1" value="3">
<label for="op3" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>Ww</b></label><tab3></tab8><tab8></tab3>
<input type="radio" id="op1_3" name="ques2" value="3">
<label for="op1_3" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>Ww</b></label><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="radio" id="op4" name="ques1" value="4">
<label for="op4" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>Wpw</b></label><tab3></tab3><tab7></tab7>
<input type="radio" id="op1_4" name="ques2" value="4">
<label for="op1_4" style="color:#1E1EFF; line-height:1.7; font-size: 25px;"><b>Wpw</b></label><br>
<button id="ok_btn" onclick="question5()"><b>Next</b></button>
</div>
	`;
	}
	else{
		alert("Wrong Attemp!!!");
	}
}


function question5(){
	
	var rbs = document.querySelectorAll('input[name="ques1"]');
            let x1;
            for (var rb of rbs) {
                if (rb.checked) {
                    x1 = rb.value;
                    break;
                }
            }
			
	var rbs = document.querySelectorAll('input[name="ques2"]');
            let x2;
            for (var rb of rbs) {
                if (rb.checked) {
                    x2 = rb.value;
                    break;
                }
            }
			
	if(x1==3 && x2==4){
	
	var rbs = document.querySelectorAll('input[name="powder"]');
            let x=1;
            for (var rb of rbs) {
                if (rb.checked) {
                    x = rb.value;
                    break;
                }
            }
	
	if(x==1){
	var W1=4.13;
    var W2=19.95;
    var	W3=19.63;
	var	W4=0.32;
	var W5=3.0937;
	var W6=1.3349;
	}
	else{
	var W1=2.2;
    var W2=20.00;
    var	W3=19.35;
	var	W4=0.65;
    var W5=1.5230;
	var W6=1.4444;	
	}
	
	document.getElementById("calc_table").innerHTML =`
	<div id="calc_centre"><br>
<label style="font-size:40px; font-weight: bold; color:red;">Formula Used</label><br><br>
<label style="font-size:25px; font-weight: bold; color:blue;">1. Volume of Water displace(True Volume) =</label><br>
<label style="font-size:25px; font-weight: bold; ">Density of Water at Room temperature / Weight of Water Displaced by powder</label><br><br>
<label style="font-size:25px; font-weight: bold; color:blue;">2. True density =  </label>
<label style="font-size:25px; font-weight: bold; ">Weight of Powder / True Volume</label><br><br>
<tab2></tab2><table>
<tr>
<th style="width:10rem; height:5rem; text-align: center ; background-color: lightblue; color:white; font-size:30px;">Wp</th>
<th style="width:10rem; height:5rem; text-align: center ; background-color: lightblue; color:white; font-size:30px;">Ww</th>
<th style="width:10rem; height:5rem; text-align: center ; background-color: lightblue; color:white; font-size:30px;">Wpw</th>
<th style="width:10rem; height:5rem; text-align: center ; background-color: lightblue; color:white; font-size:30px;">Wdw</th>
<th style="width:10rem; height:5rem; text-align: center ; background-color: lightblue; color:white; font-size:30px;">True Volume</th>
<th style="width:10rem; height:5rem; text-align: center ; background-color: lightblue; color:white; font-size:30px;">True Density</th>
</tr>
<tr>
<th style="width:10rem; height:5rem; text-align: center ; background-color: lightblue; font-size:30px;">`+W1+`</th>
<th style="width:10rem; height:5rem; text-align: center ; background-color: lightblue; font-size:30px;">`+W2+`</th>
<th style="width:10rem; height:5rem; text-align: center ; background-color: lightblue; font-size:30px;">`+W3+`</th>
<th style="width:10rem; height:5rem; text-align: center ; background-color: lightblue; font-size:30px;">`+W4+`</th>
<th style="width:10rem; height:5rem; text-align: center ; background-color: lightblue; font-size:30px;">`+W5+`</th>
<th style="width:10rem; height:5rem; text-align: center ; background-color: lightblue; font-size:30px;">`+W6+`</th>
</tr>
</table>
<br><br>
<button id="ok_btn" onclick="question6()"><b>Next</b></button>
</div>
`;
	}
	else{
		alert("Wrong Attemp!!!");
	}
}

function question6(){
	document.getElementById("calc_table").innerHTML ="";
	question_time(0);
}


function question_time(i){
	document.getElementById("question_box").innerHTML =`
	<div id="questions">
						<div class="quiz-box custom-box ">
	<div class="question-number">

	</div>
	<div class="question-text">

	</div>
	<div class="option-container">

	</div>
	<div class="next-question-btn">
		<button type="button" id="btn" disabled="disabled" onclick="next()">Next</button>
	</div>
	<div class="answers-indicator">
	</div>
</div>
</div>
	`;
	question_func(i);
}

var currentQuestion;

function question_func(ques_number){
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0 ;

let availableQuestions = [];
let availableOptions = [];


// Push the // QUESTION:  into availableQuestion Array
function setAvailableQuestions(){
  const totalQuestion = quiz.length;
  for(let i = 0 ; i<totalQuestion; i++){
    availableQuestions.push(quiz[i])
  }
}

function getNewQuestion(){
 // set question number
 questionNumber.innerHTML = "Experiment 2 - Determination of True Density of Powders";

 // set question questionText
 // get random question


  const questionIndex = availableQuestions[ques_number];

 currentQuestion = questionIndex;
 questionText.innerHTML = currentQuestion.q;

 // get the position of 'questionIndex' from the availableQuestion Array;

 const index1 = availableQuestions.indexOf(ques_number);
 // remove the 'questionIndex' from the availableQuestion Array, so that the question does not repeat again

 availableQuestions.splice(index1,1);

// set options
// get the length of options

const optionlen = currentQuestion.options.length
// push options into availableOptions Array

for(let i =0 ; i< optionlen ; i++){
  availableOptions.push(i)
}

optionContainer.innerHTML = '';
 let animationDelay = 0.2;

 // create options in HTML

 for(let i =0 ; i < optionlen; i++){
   // random opton
   const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
   // get the position of 'optonIndex' from the availableOptions
   const index2 = availableOptions.indexOf(optonIndex);

  // remove the 'optionIndex' from the availableOptions, so that the option does not repeat

  availableOptions.splice(index2,1);



   const option = document.createElement("div");
   option.innerHTML = currentQuestion.options[optonIndex];
   option.id = optonIndex;
   option.style.animationDelay = animationDelay + 's';
   animationDelay = animationDelay + 0.2;


   option.className = "option";
   optionContainer.appendChild(option)
   option.setAttribute("onclick","getResult(this)");
 }
 questionCounter++
}

// get the result of current attempt question


 setAvailableQuestions();
  getNewQuestion();
	
}
function getResult(element){
  const id = parseInt(element.id);
  // get the answer by comparsing the id of clicked option
  if(id === currentQuestion.answer){
    // set the green color to the correct option
    element.classList.add("correct");
	document.getElementById('btn').removeAttribute('disabled');
  }
  else{
    // set the red color for wrong answer
    element.classList.add("wrong");
  }
}

function next(){
	document.getElementById("question_box").innerHTML ="";
}

$("#reset").click(e=>{
	location.reload();
})
