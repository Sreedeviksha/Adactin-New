package com.adactin.helper;

import java.io.IOException;

public class FileReaderManager {
	
	//pvt empty constructor for not creating the obj of FRM anywhere else
	private FileReaderManager() {

	}
	
	//static method-through this we call non static method
	public static FileReaderManager getInstance() {
		FileReaderManager frm = new FileReaderManager();
		return frm;
	}
	
	//non-static method
	public ConfigurationReader getCrInstance() throws IOException {
		ConfigurationReader cr = new ConfigurationReader();
		return cr;
	}
	

}
