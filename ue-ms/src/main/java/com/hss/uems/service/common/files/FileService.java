package com.hss.uems.service.common.files;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {

	public String upload(String filePath, String extension, MultipartFile upload) throws Exception;
	
	public void validate(String path);

	byte[] getFile(String location) throws IOException;

	String upload(String directory, String extension, String base64) throws FileNotFoundException, IOException;

	void setHyperlink(XSSFWorkbook workbook, String label, String hyperlink,
			XSSFSheet sheet, Cell cell);

	void setHyperlink(XSSFWorkbook workbook, String hyperlink, XSSFSheet sheet, Cell cell);
	
}
